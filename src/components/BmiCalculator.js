import React from 'react'

const BmiCalculator = () => {
    return (
        <>
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="card text-center box-bmi">
                        <div className="card-header bg-secondary text-white">
                            BMI Calculator
                        </div>
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-6">
                                <label className="">Height (cm)</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                <label className="">Weight (kg)</label>
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <button className="btn btn-sm btn-primary">Reset</button>
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
