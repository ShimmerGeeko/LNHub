import jsonData from "@/public/locales/en/common";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import Header from "../components/Header";



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
            <Grid item xs={6}>
              <p>
                <Typography variant="h5">{t.line1}</Typography>
                <Typography variant="h5">{t.line2}</Typography>
              </p>
            </Grid>
            <Grid item xs={6}>
              <Image
                height={380}
                width={850}
                src={
                  process.env.NEXT_PUBLIC_BASE_URL +
                  `/assets/insurance-Broker-vs-Insurer.jpg`
                }
                alt={"logo"}
              />
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}
