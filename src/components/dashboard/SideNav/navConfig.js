// navConfig.js
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";

const navItems = [
  {
    icon: InsertChartIcon, // Reference the component instead of rendering
    label: "Dashboard",
    link: "dashboard",
  },
  {
    icon: PunchClockIcon,
    label: "History",
    link: "history",
  },
  {
    icon: ShoppingCartCheckoutSharpIcon,
    label: "Payout",
    link: "payout",
  },
];

export default navItems;
