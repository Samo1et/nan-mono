import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const sections = [
  { title: 'О нас', url: '#' },
  { title: 'Профессии', url: '#' },
  { title: 'Цены', url: '#' },
  { title: 'Вопросы', url: '#' },
  { title: 'Контакты', url: '#' }
];

export default function Header(props) {
  const classes = useStyles();
  const router = useRouter()
  const { title } = props;

  const handleClickSignIn = (e) => {
    e.preventDefault()
    router.push('/signin')
  }

  const handleClickCourses = (e) => {
    e.preventDefault()
    router.push('/courses')
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">IT-BASIS</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={handleClickSignIn}>
          Войти
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Button
            color="inherit"
            noWrap
            variant="body2"
            className={classes.toolbarLink}
            component='a'
            onClick={handleClickCourses}
          >
            Курсы
          </Button>
        {sections.map((section) => (
          <Button
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
            component='a'
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};