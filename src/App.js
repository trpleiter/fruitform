import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
    const [counterStrawberry, setCounterStrawberry] = React.useState(0);
    const [counterBanana, setCounterBanana] = React.useState(0);
    const [counterApple, setCounterApple] = React.useState(0);
    const [counterKiwi, setCounterKiwi] = React.useState(0);
    const {register, handleSubmit} = useForm( {mode: 'onChange'} );

    function onFormSubmit(data) {
        console.log(data);
    }

    function deductOneStrawberry() {
        if (counterStrawberry === 0) {
            return counterStrawberry
        } else {
            return counterStrawberry - 1;
        }
    }

    function addOneStrawberry() {
        return counterStrawberry + 1;
    }

    function deductOneBanana() {
        if (counterBanana === 0) {
            return counterBanana
        } else {
            return counterBanana - 1;
        }
    }

    function addOneBanana() {
        return counterBanana + 1;
    }

    function deductOneApple() {
        if (counterApple === 0) {
            return counterApple
        } else {
            return counterApple - 1;
        }
    }

    function addOneApple() {
        return counterApple + 1;
    }

    function deductOneKiwi() {
        if (counterKiwi === 0) {
            return counterKiwi
        } else {
            return counterKiwi - 1;
        }
    }

    function addOneKiwi() {
        return counterKiwi + 1;
    }

    function resetCounters() {
        return setCounterStrawberry(0), setCounterBanana(0), setCounterApple(0), setCounterKiwi(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="order-container">
                    <div className="fruit-container">
                        <p>🍓 Aardbeien </p>
                        <button
                            type="button"
                            onClick={() => setCounterStrawberry(deductOneStrawberry)}>-</button>
                        <input type="number" value={counterStrawberry} {...register("strawberry")} className="fruit-count"/>
                        <button type="button" onClick={() => setCounterStrawberry(addOneStrawberry)}>+</button>
                    </div>

                    <div className="fruit-container">
                        <p>🍌 Bananen</p>
                        <button type="button" onClick={() => setCounterBanana(deductOneBanana)}>-</button>
                        <input type="number" value={counterBanana} {...register("banana")} className="fruit-count"/>
                        <button type="button" onClick={() => setCounterBanana(addOneBanana)}>+</button>
                    </div>

                    <div className="fruit-container">
                        <p>🍏 Appels</p>
                        <button type="button" onClick={() => setCounterApple(deductOneApple)}>-</button>
                        <input type="number" value={counterApple} {...register("apple")} className="fruit-count"/>
                        <button type="button" onClick={() => setCounterApple(addOneApple)}>+</button>
                    </div>

                    <div className="fruit-container">
                        <p>🥝Kiwi</p>
                        <button type="button" onClick={() => setCounterKiwi(deductOneKiwi)}>-</button>
                        <input type="number"  value={counterKiwi} className="fruit-count"/>
                        <button type="button" onClick={() => setCounterKiwi(addOneKiwi)}>+</button>
                    </div>

                    <button className="fruit-container" type="button" onClick={resetCounters}> Reset</button>

                    <input
                        type="text"
                        className="input-field"
                        placeholder="Voornaam"
                        {...register("firstname")}
                    />

                    <input
                        type="text"
                        className="input-field"
                        placeholder="Achternaam"
                        {...register("surname")}
                    />
                    <input
                        type="number"
                        className="input-field"
                        placeholder="Leeftijd"
                        {...register("age")}
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Postcode"
                        {...register("zipcode")}
                    />
                    <label htmlFor="frequency">Bezorgfrequentie</label>
                    <select{...register("frequency")}>
                        <option value="eachweek">Elke week</option>
                        <option value="everyotherweek">Om de week</option>
                        <option value="eachmonth">Elke maand</option>
                    </select>
                    <div>
                        <label htmlFor="timeslot">Overdag</label>
                        <input
                            type="radio"
                            id="timeslot"
                            value="daytime"
                            {...register("timeslot")}
                            checked
                        />

                        <label htmlFor="timeslot">'s Avonds</label>
                        <input
                            type="radio"
                            id="timeslot"
                            value="evening"
                            {...register("timeslot")}
                        />
                    </div>
                    <textarea
                        placeholder="Opmerkingen."
                        cols="30"
                        rows="10"
                        {...register("remarks")}
                    >
                    </textarea>
                    <div>
                        <input
                            type="checkbox"
                            id="termsconditions"
                            {...register("termsconditions")}
                        />
                        <label htmlFor="timeslot">Ik ga akkoord met de voorwaarden</label>
                    </div>
                    <button type="submit">Verzend</button>
                {/*    Ik krijg de aantallen van de fruitsoorten niet gelogd..*/}
                </div>
            </form>
        </>
    );
}

export default App;
