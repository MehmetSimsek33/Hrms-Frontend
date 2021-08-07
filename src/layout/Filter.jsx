import React, { useEffect, useState } from 'react'
import CityService from '../services/cityService.jsx';
import TypeOfWorkService from '../services/TypeOfWorkService.jsx';
import WorkingTimeService from '../services/WorkingTimeService.jsx';
import { Label, Dropdown, Segment, Checkbox, Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react';

export default function Filter({ clickEvent }) {
    const [cities, setCities] = useState([]);
    const [typeOfWorks, setTypeOfWOrks] = useState([]);
    const [workingTimeS, setWorkingTimeS] = useState([]);
    useEffect(() => {
      let cityService = new CityService();
      cityService.getCities().then((result) => setCities(result.data.data));
        
      let workingTimeService=new WorkingTimeService();
      workingTimeService.getWorkingTimes().then((result)=>setWorkingTimeS(result.data.data))

      let typeOfWorkService = new TypeOfWorkService();
      typeOfWorkService.getTypeOfWorks().then((result) => setTypeOfWOrks(result.data.data));
    }, []);
   
  
    const [cityIndex, setCityIndex] = useState([]);
    const handleChangeCity = (e, { value }) => {
      setCityIndex(value);
  
    };
   
    const [typeOfWorkIndex, setTypeOfWorkIndex] = useState([]);
    const handleChangeTypeOfWork = (e, { value }) => {
        
        
      setTypeOfWorkIndex(value);
    };
    const [workingTimeIndex, setWorkingTime] = useState([]);
    const handleChangeWorkingTime = (e, { value }) => {
        setWorkingTime(value);
          };
  
    return (
      <div>
        <Segment color="black" raised>
          <Label size="large">Şehir</Label>
          <Dropdown
            placeholder="Şehir seçiniz"
            selection
            search
            clearable
            options={cities.map((city, index) => {
              return { text: city.cityName, key: city.index, value: city.id };
            })}
            onChange={handleChangeCity}
            value={cityIndex}
          />
        </Segment>
  
        <Segment color="black" raised>
          <Label size="large">Çalışma Türü</Label>
          <Dropdown
            placeholder="Çalışma türü seçiniz"
            selection
            search
            clearable
            options={typeOfWorks.map((typeOfWork, index) => {
              return {
                text: typeOfWork.typeOfWorkName,
                key: typeOfWork.index,
                value: typeOfWork.id,
              };
            })}
            onChange={handleChangeTypeOfWork}
            value={typeOfWorkIndex}
          />
        </Segment>
  
        <Segment color="black" raised>
          <Label size="large">Çalışma Türü</Label>
          <Dropdown
            placeholder="Çalışma türü seçiniz"
            selection
            search
            clearable
            options={workingTimeS.map((workingTime, index) => {
              return {
                text: workingTime.workingTimeName,
                key: workingTime.index,
                value: workingTime.id,
              };
            })}
            onChange={handleChangeWorkingTime}
            value={workingTimeIndex}
          />
        </Segment>
      
        <div>
          <Segment>
            <Button
             inverted
             color="green"
              onClick={() =>
                clickEvent({ cityId: cityIndex, typeOfWorkId: typeOfWorkIndex,workingTimeId:workingTimeIndex  })
              }
              icon
              labelPosition="left"
            >
              <Icon name="filter" />
              Filtrele
            </Button>
            <Button
              inverted
              color="red"
              onClick={() => {
                clickEvent({ cityId: 0, typeOfWorkId: 0 });
                // handleDropdownClear();
              }}
              icon
              labelPosition="right"
            >
              Temizle
              <Icon name="trash alternate outline" />
            </Button>
          </Segment>
        </div>
      </div>
    );
  }