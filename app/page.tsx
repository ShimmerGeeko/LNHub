import Image from "next/image";
import styles from "./page.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "next/link";
import jsonData from "@/public/locales/en/common";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const t = jsonData;


  return (
    <>
  <Header></Header>
      <main className={styles.main}>
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 3, sm: 4, md: 5 }}
          >
            <Grid item xs={6}>
              <p>
                <Typography variant="h5">{t.line1}</Typography>
                <Typography variant="h5">{t.line2}</Typography>
              </p>
            </Grid>
            {/* <Grid item xs={6}>
              <Image
                height={380}
                width={850}
                src={
                  process.env.NEXT_PUBLIC_BASE_URL +
                  `/assets/insurance-Broker-vs-Insurer.jpg`
                }
                alt={"logo"}
              />
            </Grid> */}
          </Grid>
        </div>
      </main>
     <Footer></Footer>
    </>
  );
}
