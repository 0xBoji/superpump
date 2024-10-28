import { Billboard } from "./type";
import bg from "../assets/bg.jpg";
export const sampleData: Billboard[] = [
  {
    id: "1",
    owner: "John Doe",
    address: "123 Main St, New York, NY", 
    imageUrl: bg.src,
    price: 500,
    size: "10x20 feet",
    country: "USA",
    city: "New York",
    startDate: "2024-10-01",
    endDate: "2024-12-01",
    ownerWallet: "0xabc123...xyz",
    status: 0,
    isMint: false,
    tokenId: 1
  },
  {
    id: "2",
    owner: "Jane Smith",
    address: "456 Market Ave, Los Angeles, CA",
    imageUrl: bg.src,
    price: 750,
    size: "15x30 feet", 
    country: "USA",
    city: "Los Angeles",
    startDate: "2024-11-01",
    endDate: "2024-12-31",
    ownerWallet: "0xdef456...xyz",
    status: 1,
    isMint: true,
    tokenId: 2
  },
  {
    id: "3",
    owner: "Bill Johnson",
    address: "789 Oak St, Chicago, IL",
    imageUrl: bg.src,
    price: 600,
    size: "12x24 feet",
    country: "USA", 
    city: "Chicago",
    startDate: "2024-09-15",
    endDate: "2024-10-15",
    ownerWallet: "0xghi789...xyz",
    status: 0,
    isMint: true,
    tokenId: 3
  },
  {
    id: "4",
    owner: "Lisa White",
    address: "101 Pine St, San Francisco, CA",
    imageUrl: bg.src,
    price: 550,
    size: "14x28 feet",
    country: "USA",
    city: "San Francisco", 
    startDate: "2024-12-01",
    endDate: "2025-01-01",
    ownerWallet: "0xjkl012...xyz",
    status: 1,
    isMint: false,
    tokenId: 4
  },
  {
    id: "5",
    owner: "Tom Brown",
    address: "202 Cedar Rd, Houston, TX",
    imageUrl: bg.src,
    price: 700,
    size: "16x32 feet",
    country: "USA",
    city: "Houston",
    startDate: "2024-11-10",
    endDate: "2024-12-10",
    ownerWallet: "0xxyz345...abc",
    status: 0,
    isMint: true,
    tokenId: 5
  },
  {
    id: "6",
    owner: "Emma Green",
    address: "303 Maple St, Miami, FL",
    imageUrl: bg.src,
    price: 480,
    size: "10x20 feet",
    country: "USA",
    city: "Miami",
    startDate: "2024-10-15",
    endDate: "2024-11-15",
    ownerWallet: "0xabc678...def",
    status: 0,
    isMint: false,
    tokenId: 6
  },
  {
    id: "7",
    owner: "Michael Blue",
    address: "404 Birch Ave, Seattle, WA",
    imageUrl: bg.src,
    price: 520,
    size: "12x24 feet",
    country: "USA",
    city: "Seattle",
    startDate: "2024-12-01",
    endDate: "2025-01-01",
    ownerWallet: "0xghi901...jkl",
    status: 1,
    isMint: true,
    tokenId: 7
  },
  {
    id: "8",
    owner: "Olivia Black",
    address: "505 Redwood Dr, Austin, TX",
    imageUrl: bg.src,
    price: 680,
    size: "14x28 feet",
    country: "USA",
    city: "Austin",
    startDate: "2024-11-05",
    endDate: "2024-12-05",
    ownerWallet: "0xjkl345...xyz",
    status: 0,
    isMint: false,
    tokenId: 8
  },
  {
    id: "9",
    owner: "Lucas Brown",
    address: "606 Elm St, Boston, MA",
    imageUrl: bg.src,
    price: 720,
    size: "15x30 feet",
    country: "USA",
    city: "Boston",
    startDate: "2024-10-10",
    endDate: "2024-11-10",
    ownerWallet: "0xabc901...def",
    status: 1,
    isMint: true,
    tokenId: 9
  },
  {
    id: "10",
    owner: "Sophia Silver",
    address: "707 Walnut St, Denver, CO",
    imageUrl: bg.src,
    price: 650,
    size: "12x24 feet",
    country: "USA",
    city: "Denver",
    startDate: "2024-11-20",
    endDate: "2024-12-20",
    ownerWallet: "0xxyz678...abc",
    status: 0,
    isMint: false,
    tokenId: 10
  },
];
