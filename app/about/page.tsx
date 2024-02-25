import jsonData from "@/public/locales/en/common";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Home() {
  const t = jsonData;
 
  return (
    <>
    <Header/>
      <main className={styles.main}>
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 3, sm: 4, md: 5 }}
          >
            {/* style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "6rem"}} */}
            <Grid item xs={6}>
              <p className={"card-class"} >
                <Typography variant="h6">{t.line1}</Typography>
                <Typography variant="h6">{t.line2}</Typography>
              </p>
            </Grid>
            {/* <Grid item xs={6}>
              <Image
                height={380}
                width={850}
                objectFit="cover"
                className={styles.imagee}
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
