import React, { useState } from 'react';

function JSONForm() {
  const [text, settext] = useState("");
  const initialResultState = { status: null, message: "" };
  const [result, setresult] = useState(initialResultState);
  const onChangeHandler = (e) => {
    settext(e.target.value);
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { status, message } = await (await fetch("https://cliqcallback.herokuapp.com/cliq/convert2jsobject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: text })
    })).json();
    setresult({ status, message });
    setTimeout(() => setresult(initialResultState), 3000)
  }
  return (
    <div className="">
      <form onSubmit={onSubmitHandler}>
        <label>JSON Text
        <input type="text" placeholder="Place your JSON text here...." value={text} onChange={onChangeHandler} style={{ margin: 15 }} />
        </label>
        <input type="submit" />
      </form>
      <span style={result.status === 500 ? { color: "red" } : { color: "green" }}>{result.message}</span>
    </div>
  );
}

export default JSONForm;
