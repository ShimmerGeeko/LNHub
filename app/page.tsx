import Image from "next/image";
import styles from "./page.module.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from "next/link";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Home() {
  return (
    <>
      <header style={{ padding: '.5rem 2rem', display:'flex', alignItems:'center',justifyContent:'space-between', borderBottom:'1px solid #E5EAF2' }}>

        <Image height={50} width={140} src={`/logo.png`} alt={"logo"} />

        <nav aria-label="main mailbox folders" style={{width:'30%'}}>

          <ul style={{ listStyleType: 'none', display: 'flex', gap: '1.5rem', fontSize: '1.1rem' }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Blog</Link>
            </li>
            <li>
              <Link href="/blog/hello-world">Gallery</Link>
            </li>
            <li>
              <Link href="/blog/hello-world">Contact Us</Link>
            </li>
          </ul>

          {/* <List style={{ display: "flex" }} >
                <ListItem>
                  <ListItemButton >
                    <ListItemText primary={<Typography variant="h6">
                      HOME
                    </Typography>} />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemText primary={<Typography variant="h6">
                      BLOG
                    </Typography>} />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton>
                    <ListItemText primary={<Typography variant="h6">
                      GALLERY
                    </Typography>} />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton>
                    <ListItemText primary={<Typography variant="h6">
                      CONTACT US
                    </Typography>} />
                  </ListItemButton>
                </ListItem>
              </List> */}
        </nav>

      </header>
      <main className={styles.main}>
        <div >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 4, md: 5 }}>

            <Grid item xs={6}>
              <p>
                <Typography variant="h5" >
                  {` The world is changing faster than ever and for good. 
              With the ever increasing documentation requirements,
              enhancements in regulatory mandates, updates in the legal procedures, 
              amendments in laws, technological
              upgrades, changes in the outlook of the judicial system, exponentially increased fraud landscape and
              every-legal-thing around; it is becoming extremely challenging for businesses to keep up with the pace of the
              change.
             `}
                </Typography>
                <Typography variant="h5">
                  Our goal at LNH is to be an aide to businesses and individuals seeking to fully focus on serving their authentic
                  customers while relying on us to help them stay competent and transcend in embracing the change.
                </Typography>
              </p>
            </Grid>
            <Grid item xs={6}>
              <Image height={380} width={850} src={process.env.NEXT_PUBLIC_BASE_URL + `/assets/insurance-Broker-vs-Insurer.jpg`} alt={"logo"} />
            </Grid>
          </Grid>
        </div>

        {/* <div className={styles.description}>
        <div>
          <p>
            <Typography variant="h1" gutterBottom>
              LegalNex HUB
            </Typography>
            VERIFY WITH CONFIDENCE
          </p> */}

        {/* <div>
        <p>
          <Typography variant="h6" gutterBottom>
          The world is changing faster than ever and for good. With the ever increasing documentation requirements,
enhancements in regulatory mandates, updates in the legal procedures, amendments in laws, technological
upgrades, changes in the outlook of the judicial system, exponentially increased fraud landscape and
every-legal-thing around; it is becoming extremely challenging for businesses to keep up with the pace of the
change.
            </Typography>
          </p>
        </div> */}

        {/* </div>
        <div>
          <nav aria-label="main mailbox folders">
            <List style={{ display: "flex" }}>
              <ListItem >
                <ListItemButton style={{ width: "200px", textAlign: "center" }}>
                  <ListItemText primary={<Typography variant="h5" gutterBottom>
                    HOME
                  </Typography>} />
                </ListItemButton>
              </ListItem>
              <ListItem >
                <ListItemButton style={{ width: "200px", textAlign: "center" }}>
                  <ListItemText primary={<Typography variant="h5" gutterBottom>
                    BLOG
                  </Typography>} />
                </ListItemButton>
              </ListItem>
              <ListItem >
                <ListItemButton style={{ width: "200px", textAlign: "center" }}>
                  <ListItemText primary={<Typography variant="h5" gutterBottom>
                    GALLERY
                  </Typography>} />
                </ListItemButton>
              </ListItem>
              <ListItem >
                <ListItemButton style={{ width: "200px", textAlign: "center" }}>
                  <ListItemText primary={<Typography variant="h5" gutterBottom>
                    CONTACT US
                  </Typography>} />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider style={{ borderColor: "#add8e6" }} />
          </nav>
        </div>
      </div> */}
      </main>
    </>
  );
}
