import Footer from './footer'
import Header from './header'
import Meta from './meta'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.main}>
        <Meta />
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  )
}
