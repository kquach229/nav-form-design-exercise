import {
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  ListItemIcon,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Snackbar,
  SnackbarContent,
} from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '98%%', // Set width as needed
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  label: {
    background: '#fff',
    padding: '0 5px',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#333333 !important',
  },
  input: {
    width: '100%',
    borderWidth: '1px',
    borderColor: '#5B616E !important',
    borderStyle: 'solid',
    padding: '4px',
    height: '48px',

    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  inputItem: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  radioInputSubtext: {
    color: '#676767',
    padding: '0 5px',
  },
  submitButton: {
    borderRadius: '0px',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rowedInput: {
    width: '100%',
    borderWidth: '1px',
    borderColor: '#5B616E !important',
    borderStyle: 'solid',
  },
  rowedInputItem: {
    margin: '25px 0',
  },
  snackbar: {
    backgroundColor: '#B6E8C3',
  },
  successIcon: {
    width: '20px',
    height: '20px',
    paddingRight: '15px',
  },
  clearIcon: {
    width: '12px',
    height: '12px',
    cursor: 'pointer',
    color: '#27B968',
  },
}));

const FormComponent = ({ isMobile, isTablet }) => {
  const classes = useStyles();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSnackbar = () => {
    setShowSnackbar(!showSnackbar);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const snackbar = () => {
    return (
      <Snackbar
        sx={{ height: '5%', zIndex: 999999999 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        autoHideDuration={6000}
        open={showSnackbar}
        onClose={(event, reason) => {
          // `reason === 'escapeKeyDown'` if `Escape` was pressed
          setShowSnackbar(false);
          // call `event.preventDefault` to only close one Snackbar at a time.
        }}>
        <SnackbarContent
          style={{
            backgroundColor: '#B6E8C3',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            verticalAlign: 'middle',
          }}
          message={
            <span
              style={{
                display: 'flex',
                verticalAlign: 'middle',
                justifyContent: 'space-between',
                width: '90vw',
              }}
              id='client-snackbar'>
              <div
                style={{
                  display: 'flex',
                }}>
                {' '}
                <img
                  className={classes.successIcon}
                  src='/images/successIcon.svg'
                />
                <span style={{ fontSize: '14px' }}>Submit success</span>
              </div>

              <span
                className={classes.clearIcon}
                onClick={() => setShowSnackbar(false)}>
                x
              </span>
            </span>
          }
        />
      </Snackbar>
    );
  };

  const options = [
    'Multi-select 1',
    'Multi-select 2',
    'Multi-select 3',
    'Multi-select 4',
  ];

  const handleSelections = (event) => {
    const { value } = event.target;
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(value)) {
        return prevSelectedItems.filter((item) => item !== value);
      } else {
        return [...prevSelectedItems, value];
      }
    });
  };

  if (isMobile) {
    return (
      <div className={classes.root}>
        {snackbar()}
        <div className={classes.inputItem}>
          <InputLabel classes={{ root: classes.label }}>Text Field </InputLabel>
          <TextField
            placeholder='Text'
            sx={{
              input: {
                '&::placeholder': {
                  // <----- Add this.
                  color: '#5B616E',
                  opacity: 1,
                },
              },
              label: { color: 'blue' },
            }}
            InputProps={{
              classes: {
                root: classes.input,
              },
            }}
            variant='outlined'
          />
        </div>
        <div className={classes.inputItem}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <InputLabel classes={{ root: classes.label }}>Date</InputLabel>
            <DatePicker
              slotProps={{
                textField: {
                  variant: 'outlined',
                },
              }}
              className={classes.input}
              label='mm/dd/yyyy'
            />
          </LocalizationProvider>
        </div>
        <div className={classes.inputItem}>
          <InputLabel classes={{ root: classes.label }}>Oops</InputLabel>
          <TextField
            placeholder='Text'
            sx={{
              input: {
                '&::placeholder': {
                  // <----- Add this.
                  color: '#5B616E',
                  opacity: 1,
                },
              },
              label: { color: 'blue' },
            }}
            InputProps={{
              classes: {
                root: classes.input,
              },
            }}
            variant='outlined'
          />
        </div>
        <div className={classes.inputItem}>
          <InputLabel placeholder='Select...' classes={{ root: classes.label }}>
            Dropdown Select
          </InputLabel>
          <Select
            style={{ border: '1px solid #5B616E' }}
            value={selectedOption}
            onChange={handleChange}
            displayEmpty // This allows an empty display value
            renderValue={(value) =>
              selectedOption === '' ? 'Select an option' : selectedOption
            }>
            <MenuItem value='First option'>First option</MenuItem>
            <MenuItem value='Second option'>Second option</MenuItem>
            <MenuItem value='Third option'>Third option</MenuItem>
            <MenuItem value='Fourth option'>Fourth option</MenuItem>
          </Select>
        </div>
        <div className={classes.inputItem}>
          <InputLabel placeholder='Select...' classes={{ root: classes.label }}>
            Multi-select
          </InputLabel>
          <Select
            labelId='mutiple-select-label'
            onChange={handleSelections}
            style={{ border: '1px solid #5B616E' }}
            value={selectedItems}
            displayEmpty
            renderValue={(value) =>
              value?.length
                ? Array.isArray(value)
                  ? value.join(', ')
                  : value
                : 'Select multiple...'
            }
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                  width: 250,
                },
              },
            }}>
            {options.map((option) => {
              return (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox
                      sx={{
                        color: '#5B616E',
                        '&.Mui-checked': {
                          color: '#51548E', // Checked color
                        },
                      }}
                      checked={selectedItems.indexOf(option) > -1}
                    />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div className={classes.inputItem}>
          <span className={classes.label}>Question goes here</span>
          <span className={classes.radioInputSubtext}>
            Lerm ipsum dolor site amet, consectuerur adispicing elit.
          </span>
          <span>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue=''
              name='radio-buttons-group'>
              <FormControlLabel
                value='True'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#51548E',
                      },
                    }}
                  />
                }
                label='True'
              />
              <FormControlLabel
                value='False'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#51548E',
                      },
                    }}
                  />
                }
                label='False'
              />
            </RadioGroup>
          </span>
        </div>
        <Button
          onClick={handleSnackbar}
          variant='contained'
          classes={{ contained: classes.submitButton }}
          className={classes.submitButton}
          type='submit'
          sx={{
            borderRadius: '100px',
            backgroundColor: '#052461',
            height: '51px',
            marginTop: '25px',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '19.2px',
            textTransform: 'none',
          }}>
          Submit
        </Button>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className={classes.root}>
        {snackbar()}
        <div className={classes.inputItem}>
          <InputLabel classes={{ root: classes.label }}>Text Field </InputLabel>
          <TextField
            placeholder='Text'
            sx={{
              input: {
                '&::placeholder': {
                  // <----- Add this.
                  color: '#5B616E',
                  opacity: 1,
                },
              },
              label: { color: 'blue' },
            }}
            InputProps={{
              classes: {
                root: classes.input,
              },
            }}
            variant='outlined'
          />
        </div>
        <div className={classes.inputRow}>
          <div className={classes.rowedInputItem} style={{ width: '30vw' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <InputLabel classes={{ root: classes.label }}>Date</InputLabel>
              <DatePicker
                style={{ width: '30vw' }}
                className={classes.rowedInput}
                label='mm/dd/yyyy'
              />
            </LocalizationProvider>
          </div>
          <div className={classes.rowedInputItem}>
            <InputLabel classes={{ root: classes.label }}>Oops</InputLabel>
            <TextField
              placeholder='Text'
              sx={{
                input: {
                  '&::placeholder': {
                    // <----- Add this.
                    color: '#5B616E',
                    opacity: 1,
                  },
                },
                label: { color: 'blue' },
              }}
              style={{ width: '30vw' }}
              InputProps={{
                classes: {
                  root: classes.rowedInput,
                },
              }}
              variant='outlined'
            />
          </div>
        </div>

        <div className={classes.inputRow}>
          <div className={classes.rowedInputItem}>
            <InputLabel
              placeholder='Select...'
              classes={{ root: classes.label }}>
              Dropdown Select
            </InputLabel>
            <Select
              style={{ width: '30vw', border: '1px solid #5B616E' }}
              onChange={handleChange}
              displayEmpty
              renderValue={(value) =>
                selectedOption === '' ? 'Select an option' : selectedOption
              }>
              <MenuItem value='First option'>First option</MenuItem>
              <MenuItem value='Second option'>Second option</MenuItem>
              <MenuItem value='Third option'>Third option</MenuItem>
              <MenuItem value='Fourth option'>Fourth option</MenuItem>
            </Select>
          </div>
          <div className={classes.rowedInputItem}>
            <InputLabel
              placeholder='Select...'
              classes={{ root: classes.label }}>
              Multi-select
            </InputLabel>
            <Select
              style={{ width: '30vw', border: '1px solid #5B616E' }}
              labelId='mutiple-select-label'
              onChange={handleSelections}
              value={selectedItems}
              displayEmpty
              renderValue={(value) =>
                value?.length
                  ? Array.isArray(value)
                    ? value.join(', ')
                    : value
                  : 'Select multiple...'
              }
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                    width: 250,
                  },
                },
              }}>
              {options.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    <ListItemIcon>
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#51548E',
                          },
                        }}
                        checked={selectedItems.indexOf(option) > -1}
                      />
                    </ListItemIcon>
                    <ListItemText primary={option} />
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </div>
        <div className={classes.inputItem}>
          <span className={classes.label}>Question goes here</span>
          <span className={classes.radioInputSubtext}>
            Lerm ipsum dolor site amet, consectuerur adispicing elit.
          </span>
          <span>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue=''
              name='radio-buttons-group'>
              <FormControlLabel
                value='True'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#51548E',
                      },
                    }}
                  />
                }
                label='True'
              />
              <FormControlLabel
                value='False'
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#51548E',
                      },
                    }}
                  />
                }
                label='False'
              />
            </RadioGroup>
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant='contained'
            classes={{ contained: classes.submitButton }}
            className={classes.submitButton}
            type='submit'
            onClick={handleSnackbar}
            sx={{
              borderRadius: '100px',
              backgroundColor: '#052461',
              height: '51px',
              marginTop: '25px',
              width: '255px',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '19.2px',
              textTransform: 'none',
            }}>
            Submit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {snackbar()}
      <div className={classes.inputItem}>
        <InputLabel classes={{ root: classes.label }}>Text Field </InputLabel>
        <TextField
          placeholder='Text'
          sx={{
            input: {
              '&::placeholder': {
                // <----- Add this.
                color: '#5B616E',
                opacity: 1,
              },
            },
            label: { color: 'blue' },
          }}
          InputProps={{
            classes: {
              root: classes.input,
            },
          }}
          variant='outlined'
        />
      </div>
      <div className={classes.inputRow}>
        <div className={classes.rowedInputItem} style={{ width: '36vw' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <InputLabel classes={{ root: classes.label }}>Date</InputLabel>
            <DatePicker
              style={{ width: '36vw' }}
              className={classes.rowedInput}
              label='mm/dd/yyyy'
            />
          </LocalizationProvider>
        </div>
        <div className={classes.rowedInputItem}>
          <InputLabel classes={{ root: classes.label }}>Oops</InputLabel>
          <TextField
            sx={{
              input: {
                '&::placeholder': {
                  // <----- Add this.
                  color: '#5B616E',
                  opacity: 1,
                },
              },
              label: { color: 'blue' },
            }}
            placeholder='Text'
            style={{ width: '36vw' }}
            InputProps={{
              classes: {
                root: classes.rowedInput,
              },
            }}
            variant='outlined'
          />
        </div>
      </div>

      <div className={classes.inputRow}>
        <div className={classes.rowedInputItem}>
          <InputLabel placeholder='Select...' classes={{ root: classes.label }}>
            Dropdown Select
          </InputLabel>
          <Select
            style={{ width: '36vw', border: '1px solid #5B616E' }}
            onChange={handleChange}
            displayEmpty // This allows an empty display value
            renderValue={(value) =>
              selectedOption === '' ? 'Select an option' : selectedOption
            }>
            <MenuItem value='First option'>First option</MenuItem>
            <MenuItem value='Second option'>Second option</MenuItem>
            <MenuItem value='Third option'>Third option</MenuItem>
            <MenuItem value='Fourth option'>Fourth option</MenuItem>
          </Select>
        </div>
        <div className={classes.rowedInputItem}>
          <InputLabel placeholder='Select...' classes={{ root: classes.label }}>
            Multi-select
          </InputLabel>
          <Select
            style={{ width: '36vw', border: '1px solid #5B616E' }}
            labelId='mutiple-select-label'
            onChange={handleSelections}
            value={selectedItems}
            displayEmpty
            renderValue={(value) =>
              value?.length
                ? Array.isArray(value)
                  ? value.join(', ')
                  : value
                : 'Select multiple...'
            }
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                  width: 250,
                },
              },
            }}>
            {options.map((option) => {
              return (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox
                      sx={{
                        color: '#5B616E',
                        '&.Mui-checked': {
                          color: '#51548E', // Checked color
                        },
                      }}
                      checked={selectedItems.indexOf(option) > -1}
                    />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </div>
      <div className={classes.inputItem}>
        <span className={classes.label}>Question goes here</span>
        <span className={classes.radioInputSubtext}>
          Lerm ipsum dolor site amet, consectuerur adispicing elit.
        </span>
        <span>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue=''
            name='radio-buttons-group'>
            <FormControlLabel
              value='True'
              control={
                <Radio
                  sx={{
                    '&.Mui-checked': {
                      color: '#51548E',
                    },
                  }}
                />
              }
              label='True'
            />
            <FormControlLabel
              value='False'
              control={
                <Radio
                  sx={{
                    '&.Mui-checked': {
                      color: '#51548E',
                    },
                  }}
                />
              }
              label='False'
            />
          </RadioGroup>
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          classes={{ contained: classes.submitButton }}
          className={classes.submitButton}
          onClick={handleSnackbar}
          type='submit'
          sx={{
            borderRadius: '100px',
            backgroundColor: '#052461',
            height: '51px',
            marginTop: '25px',
            width: '255px',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '19.2px',
            textTransform: 'none',
          }}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FormComponent;
