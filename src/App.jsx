import './App.css'
import ControlledField from './Components/ControllledField/ControlledField'
import FromAction from './Components/FormAction/FromAction'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UncontrolledField from './Components/UncontrolledField/UncontrolledField'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm></SimpleForm>
      <FromAction></FromAction>
      <ControlledField></ControlledField>
      <UncontrolledField></UncontrolledField>
    </>
  )
}

export default App
