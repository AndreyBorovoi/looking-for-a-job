import Container from '@mui/material/Container';
import { useContext } from 'react';
import { LanguageContext } from '../../Language';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Logo } from './Logo';
import styles from './header.module.scss';

export function Header() {
  const languageContext = useContext(LanguageContext);

  const handleChange = (event: SelectChangeEvent<string>) => {
    languageContext?.changeLanguage(event.target.value);
  };

  return (
    <Container fixed className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {/* <FormControl sx={{ minWidth: '70px' }} size="small">
        <Select
          value={languageContext?.language}
          onChange={handleChange}
          variant="standard"
          className={styles.select}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'ru'}>Русский</MenuItem>
        </Select>
      </FormControl> */}
    </Container>
  );
}
