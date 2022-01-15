import React, { useEffect, useState } from 'react'
import BmiForm from './BmiForm'

const BmiCalculator = () => {
    const [count, setCount] = useState({
        heightCount: '0',
        weightCount: '0'
    })

    const { heightCount, weightCount } = count // destruct object count state

    const onChangeInput = (e) => {
        // if (e.target.name === 'heightCount') {
        //     setCount({
        //         heightCount: e.target.value
        //     })
        // }

        const { name, value } = e.target;
        setCount(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const resetForm = (e) => {
        e.preventDefault()
        setCount({
            heightCount: '0',
            weightCount: '0'
        })
    }

    const metricBmi = (height, weight) => {
        if(height > 0 && weight > 0) {
            const bmi = (weight / height / height) * 10000
            console.log(bmi)
        }
    }

    useEffect(() => {
        // metricBmi(123, 123)
        metricBmi(heightCount, weightCount)
    }, [heightCount, weightCount]) //useEffect akan bekerja setiap ada perubahan nilai selain pertama kali dimuat

    return (
        <>
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="card text-center box-bmi">
                        <div className="card-header bg-secondary text-white">
                            BMI Calculator
                        </div>
                        <div className="card-body">
                            <BmiForm 
                                title={`Height (cm)`}
                                type='number'
                                name='heightCount'
                                value={heightCount}
                                onChange={onChangeInput} 
                                />
                            <BmiForm 
                                title={`Weight (kg)`}
                                type='number'
                                name='weightCount'
                                value={weightCount}
                                onChange={onChangeInput} 
                                />
                            <button
                                onClick={resetForm} 
                                className="btn btn-sm btn-primary">Reset</button>
                        </div>
                        <div className="card-footer bg-primary text-white">
                            -
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BmiCalculator
