import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 800,
    minHeight: 300,
  },
  gridRoot: {
    flexGrow: 1,
  },
  paper: {},
});

export default function ImgMediaCard({dwarf}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{textAlign: 'center'}}
          >
            {dwarf.name}
          </Typography>
        </CardContent>

        <CardContent>
          <Grid container className={classes.gridRoot}>
            <Grid xs={12} sm={4} key="personal_info" item>
              <CardMedia
                component="img"
                alt="Dwarf image"
                style={{
                  height: 250,
                  width: '100%',
                  objectFit: 'fill',
                }}
                image={dwarf.thumbnail}
                title="Dwarf image"
              />
            </Grid>
            <Grid xs={12} sm={8} key="personal_info" item>
              <h3 style={{textAlign: 'center'}}>Personal Information</h3>
              <Typography
                variant="body2"
                color="textSecondary"
                component="ul"
                style={{listStyle: 'none'}}
              >
                <li>Age: {dwarf.age}</li>
                <li>Height: {Math.round(dwarf.height)} cm</li>
                <li>Weight: {Math.round(dwarf.weight)} kg</li>
                <li>
                  Hair color:
                  <span style={{color: dwarf['hair_color']}}>
                    {' ' + dwarf['hair_color']}
                  </span>
                </li>
              </Typography>
            </Grid>

            <Grid xs={12} key="professions" item>
              <Paper className={classes.paper}>
                <h3 style={{textAlign: 'center'}}>Professions</h3>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="ul"
                  style={{listStyle: 'none'}}
                >
                  {dwarf.professions.map((profession) => (
                    <li>{profession}</li>
                  ))}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
