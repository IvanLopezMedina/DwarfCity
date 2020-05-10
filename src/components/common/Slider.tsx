import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

interface SliderProps {
  label: string;
  range: [number, number];
  handleSonChange: (data: [string, string | number[]]) => void;
}

const RangeSlider: React.FC<SliderProps> = ({
  label = '',
  range,
  handleSonChange,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([
    Math.trunc(range[0]),
    Math.round(range[1]),
  ]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    handleSonChange([label, newValue]);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {label}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={Math.trunc(range[0])}
        max={Math.round(range[1])}
      />
    </div>
  );
};
export default RangeSlider;
