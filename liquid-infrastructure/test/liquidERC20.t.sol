// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.12;

import{Test} from "forge-std/Test.sol";
import{LiquidInfrastructureERC20} from "../contracts/LiquidInfrastructureERC20.sol";
import{LiquidInfrastructureNFT} from "../contracts/LiquidInfrastructureNFT.sol";
import{ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import{Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract LiquidERC20Test is Test {

    LiquidInfrastructureERC20 public InfraERC20;
    LiquidInfrastructureNFT public LiquidNFT1;
    LiquidInfrastructureNFT public LiquidNFT2;
    MockERC20 public FirstmockERC20;
    MockERC20 public SecondmockERC20;
    MockERC20 public ThirdmockERC20;

    address NFTUser1 = makeAddr("NFTUser1");
    address NFTUser2 = makeAddr("NFTUser2");
    address NFTUser3 = makeAddr("NFTUser3");
    address OWNER = makeAddr("OWNER");
    address holder1 = makeAddr("holder1");
    address holder2 = makeAddr("holder2");
    address holder3 = makeAddr("holder3");
    address holder4 = makeAddr("holder4");
    address badActor = makeAddr("badActor");

    address[] public erc20Addresses;

    function setUp() public{
        vm.startPrank(OWNER);
        FirstmockERC20 = new MockERC20("FirstmockERC20", "FSM", OWNER);
        SecondmockERC20 = new MockERC20("SecondmockERC20", "SSM", OWNER);
        ThirdmockERC20 = new MockERC20("ThirdmockERC20", "TSM", OWNER);

        erc20Addresses.push(address(FirstmockERC20));
        erc20Addresses.push(address(SecondmockERC20));
        erc20Addresses.push(address(ThirdmockERC20));
        address [] memory nftAddresses = new address[](0);
        address [] memory approvedHolders = new address[](0);

        InfraERC20 = new LiquidInfrastructureERC20("Infra", "INFRA", nftAddresses, approvedHolders, 500, erc20Addresses);

        assertEq(InfraERC20.totalSupply(), 0);
        assertEq(InfraERC20.name(), "Infra");
        assertEq(InfraERC20.symbol(), "INFRA");
        vm.expectRevert();
        InfraERC20.ManagedNFTs(0);
        assertEq(InfraERC20.isApprovedHolder(holder1), false);
        vm.expectRevert();
        InfraERC20.mint(holder1, 1000);
        assertEq(InfraERC20.balanceOf(holder1), 0);

        vm.stopPrank();        
    }
    function test_basicNftManagement() public {
        vm.startPrank(NFTUser1);
        LiquidNFT1 = new LiquidInfrastructureNFT("LiquidNFT1");
        LiquidNFT2 = new LiquidInfrastructureNFT("LiquidNFT2");
        vm.stopPrank();
        
        transferNftToErc20AndManage(InfraERC20, LiquidNFT1, NFTUser1);
        vm.expectEmit();
        emit LiquidInfrastructureERC20.ReleaseManagedNFT(address(LiquidNFT1), NFTUser1);
        InfraERC20.releaseManagedNFT(address (LiquidNFT1), NFTUser1);
        assertEq(LiquidNFT1.ownerOf(LiquidNFT1.AccountId()), NFTUser1);

        failToManageNFTBadSigner(InfraERC20, LiquidNFT1, NFTUser1);

        failToManageNFTNotOwner(InfraERC20, LiquidNFT1);
        
    }

    function test_basicErc20Holder() public {
        uint256 initialSupply = InfraERC20.totalSupply();
        assertEq(InfraERC20.isApprovedHolder(holder1), false);
        assertEq(InfraERC20.isApprovedHolder(holder2), false);
        assertEq(InfraERC20.isApprovedHolder(badActor), false);

        vm.startPrank(OWNER);
        vm.expectRevert("receiver not approved to hold the token");
        InfraERC20.mint(holder1, 1000);
        assertEq(InfraERC20.balanceOf(holder1), 0);

        vm.expectRevert("receiver not approved to hold the token");
        InfraERC20.mintAndDistribute(holder2, 1000);
        assertEq(InfraERC20.totalSupply(), initialSupply);
        assertEq(InfraERC20.balanceOf(holder2), 0);
        vm.stopPrank();

        vm.startPrank(badActor);
        vm.expectRevert("Ownable: caller is not the owner");
        InfraERC20.approveHolder(holder1);
        assertEq(InfraERC20.isApprovedHolder(holder1), false);

        vm.expectRevert("Ownable: caller is not the owner");
        InfraERC20.disapproveHolder(holder2);
        assertEq(InfraERC20.isApprovedHolder(holder2), false);
        vm.stopPrank();

        vm.startPrank(OWNER);
        InfraERC20.approveHolder(holder1);
        assertEq(InfraERC20.isApprovedHolder(holder1), true);
        vm.expectRevert( "holder already approved");
        InfraERC20.approveHolder(holder1);

        InfraERC20.mint(holder1, 500);
        InfraERC20.mintAndDistribute(holder1, 500);
        assertEq(InfraERC20.balanceOf(holder1), 1000);
        vm.stopPrank();

        vm.startPrank(holder1);
        vm.expectRevert("receiver not approved to hold the token");
        InfraERC20.transfer(holder2, 500);
        assertEq(InfraERC20.balanceOf(holder1), 1000);
        assertEq(InfraERC20.balanceOf(holder2), 0);
        vm.stopPrank();

        vm.startPrank(OWNER);
        InfraERC20.approveHolder(holder2);
        assertEq(InfraERC20.isApprovedHolder(holder2), true);
        vm.stopPrank();

        vm.startPrank(holder1);
        InfraERC20.transfer(holder2, 500);
        assertEq(InfraERC20.balanceOf(holder1), 500);
        assertEq(InfraERC20.balanceOf(holder2), 500);
        vm.stopPrank();

        vm.startPrank(OWNER);
        InfraERC20.disapproveHolder(holder2);
        assertEq(InfraERC20.isApprovedHolder(holder2), false);
        vm.expectRevert("receiver not approved to hold the token");
        InfraERC20.mint(holder2, 500);
        vm.expectRevert("receiver not approved to hold the token");
        InfraERC20.mintAndDistribute(holder2, 500);
        vm.stopPrank();

        vm.startPrank(holder1);
        vm.expectRevert("receiver not approved to hold the token");
        InfraERC20.transfer(holder2, 500);
        assertEq(InfraERC20.balanceOf(holder1), 500);
        assertEq(InfraERC20.balanceOf(holder2), 500);
        vm.stopPrank();

        vm.startPrank(holder2):
        InfraERC20.transfer(holder1, 50);
        assertEq(InfraERC20.balanceOf(holder1), 550);
        assertEq(InfraERC20.balanceOf(holder2), 450);
        InfraERC20.burnAndDistribute(150);
        InfraERC20.burn(300);
        assertEq(InfraERC20.balanceOf(holder1), 550);
        assertEq(InfraERC20.balanceOf(holder2), 0);
        assertEq(InfraERC20.totalSupply(), 550);
        vm.stopPrank();

        vm.startPrank(holder1);
        InfraERC20.approve(holder1, 550);
        InfraERC20.burnFrom(holder1, 550);
        assertEq(InfraERC20.balanceOf(holder1), 0);
        assertEq(InfraERC20.totalSupply(), 0);

    }

    function test_basicDistribution() public {
        

    }

    function transferNftToErc20AndManage (LiquidInfrastructureERC20 _infraERC20, LiquidInfrastructureNFT nftToManage, address _NFTOwner) public {
        uint256 accountId = nftToManage.AccountId();

        vm.startPrank(_NFTOwner);
        nftToManage.transferFrom(_NFTOwner, address(_infraERC20), accountId);
        assertEq(nftToManage.ownerOf(accountId), address(_infraERC20));
        vm.stopPrank();

        vm.startPrank(OWNER);
        vm.expectEmit();
        emit LiquidInfrastructureERC20.AddManagedNFT(address(nftToManage));
        _infraERC20.addManagedNFT(address(nftToManage));
        vm.stopPrank();
    }

    function failToManageNFTBadSigner(LiquidInfrastructureERC20 _infraERC20, LiquidInfrastructureNFT nftToManage, address _NFTOwner) public {
        uint256 accountId = nftToManage.AccountId();

        vm.startPrank(_NFTOwner);
        nftToManage.transferFrom(_NFTOwner, address(_infraERC20), accountId);
        assertEq(nftToManage.ownerOf(accountId), address(_infraERC20));
        vm.stopPrank();

        vm.startPrank(badActor);
        vm.expectRevert("Ownable: caller is not the owner");
        _infraERC20.addManagedNFT(address(nftToManage));
        vm.stopPrank();
    }

    function failToManageNFTNotOwner (LiquidInfrastructureERC20 _infraERC20, LiquidInfrastructureNFT nftToManage) public {
        vm.startPrank(OWNER);
        vm.expectRevert("this contract does not own the new ManagedNFT");
        _infraERC20.addManagedNFT(address(nftToManage));
    }
}

contract MockERC20 is ERC20, Ownable {
    constructor(string memory name, string memory symbol, address owner) ERC20(name, symbol) Ownable() {
        _mint(owner, 1000000000);
    }
}