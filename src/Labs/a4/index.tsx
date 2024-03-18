import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./state_variables/BooleanStateVariables";
import StringStateVariables from "./state_variables/StringStateVariables";
import DateStateVariable from "./state_variables/DateStateVariable";
import ObjectStateVariable from "./state_variables/ObjectStateVariable";
import ArrayStateVariable from "./state_variables/ArrayStateVariable";
import ParentStateComponent from "./shared_state/ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <>
      <h1> Assignment 4 </h1>
      <ReduxExamples />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
    </>
  );
}
export default Assignment4;
