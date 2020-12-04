import React, { useState } from "react"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { useTranslation } from "react-i18next"

import esLogo from '../imgMedia/es.png';
import enLogo from '../imgMedia/en.png';

const LanguageMenu = (props) => {
  const { i18n } = useTranslation();
  
  const [values, setValues] = useState({
    language: 'es'
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return(    
    <Select
        value={values.language}
        onChange={(e) => handleChange(e)}
        disableUnderline
        inputProps={{
        name: 'language'
        }}
        className="langMenuSelect"
    >
        <MenuItem value={'es'}><img src={esLogo} alt="ES" className="imgFlag" /></MenuItem>
        <MenuItem value={'en'}><img src={enLogo} alt="EN" className="imgFlag"  /></MenuItem>
    </Select>
    )
}

export default LanguageMenu;