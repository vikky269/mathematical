import React from 'react'
import MeasurementInfo from '../components/Measurements/MeasurementInfo'
import MeasurementTable from '../components/Measurements/MeasurementTable'
import MeasurementSystems from '../components/Measurements/MeasurementSystems'
import MeasurementConversion from '../components/Measurements/MeasurementConversion'
import LengthMeasurement from '../components/Measurements/LengthMeasurement'
import ConversionTable from '../components/Measurements/ConversionTable'
import InteractiveMeasurementTool from '../components/Measurements/DragableMeasure'


const page = () => {
  return (
    <div>
        <MeasurementInfo />
        <MeasurementTable />
        <MeasurementSystems />
        <MeasurementConversion />
        <LengthMeasurement />
        <ConversionTable />
        <InteractiveMeasurementTool />
        {/* <MeasurementOverlay /> */}
        
    </div>
  )
}

export default page