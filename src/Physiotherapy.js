
const SuggestedPhysiotherapy = [
    "AVOID SQUATTING",
    "AVOID STAIR CLIMBING",
    "AVOID CROSS LEGGED SITTING",
    "AVOID BENDING FORWARDS",
    "AVOID LIFTING WEIGHTS",
    "UNDERWATER EXERCISES",
    "ANKLE TOE MOVEMENTS",
    "STATIC QUADRICEPS EXERCISES",
    "STATIC CYCLING",
    "SWIMMING",
    "BEDSIDE KNEE ROM",
    "QUADRICEPS STRENGTHENING EXERCISES",
    "HAMSTRING STRENGTHENING EXERCISES",
    "VMO STRENGTHENING EXERCISES",
    "UNIVERSAL SHOULDER EXERCISES",
    "AVOID OVERHEAD ACTIVITY",
    "GALVANIC STIMULATION QUADRICEPS",
    "GALVANIC STIMULATION ROTATOR CUFF",
    "GALVANIC STIMULATION DELTOID",
    "SPINAL EXTENSION EXERCISES",
    "SPINAL FLEXION EXERCISES"
]

export default SuggestedPhysiotherapy;

/* export default function Physiotherapy(){

    const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return(
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Physiotherapy Adviced</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {SuggestedPhysiotherapy.map((physiotherapy) => (
            <MenuItem key={physiotherapy} value={physiotherapy}>
              <Checkbox checked={personName.indexOf(physiotherapy) > -1} />
              <ListItemText primary={physiotherapy} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
} */