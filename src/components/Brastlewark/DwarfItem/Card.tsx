import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Dwarf} from '../../../models';

const useStyles = makeStyles({
  root: {
    width: 800,
    minHeight: 300,
    maxHeight: '90%',
    overflowY: 'scroll',
  },
  gridRoot: {
    flexGrow: 1,
  },
  cardMedia: {
    height: 250,
    width: '100%',
    objectFit: 'fill',
  },
  textCenter: {
    textAlign: 'center',
  },
});

interface DwarfProps {
  dwarf: Dwarf;
}

const DwarfCard: React.FC<DwarfProps> = ({dwarf}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography
            className={classes.textCenter}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {dwarf.name}
          </Typography>
        </CardContent>

        <CardContent>
          <Grid container className={classes.gridRoot}>
            <Grid xs={12} sm={5} key="personal_info" item>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                alt="Dwarf image"
                image={dwarf.thumbnail}
                title="Dwarf image"
              />
            </Grid>
            <Grid xs={12} sm={7} key="personal_info" item>
              <h3 className={classes.textCenter}>Personal Information</h3>
              <Typography variant="body2" color="textSecondary" component="ul">
                <li>
                  <b>Age:</b> {dwarf.age}
                </li>
                <li>
                  <b>Height:</b> {Math.round(dwarf.height)} cm
                </li>
                <li>
                  <b>Weight:</b> {Math.round(dwarf.weight)} kg
                </li>
                <li>
                  <b>Hair color:</b>
                  <span style={{color: dwarf['hair_color']}}>
                    {' ' + dwarf['hair_color']}
                  </span>
                </li>
              </Typography>
            </Grid>

            <Grid xs={12} key="professions" item>
              <Paper>
                <h3 className={classes.textCenter}>Professions</h3>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="ul"
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
};

export default DwarfCard;
