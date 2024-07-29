// RoomCounter.tsx
import React from 'react';
interface Props {
    count: number;
    onChange: (value: number) => void;
}
const Counter: React.FC<Props> = ({ count, onChange }) => {

    const increaseRoomCount = () => {
        if (count < 190) {
            onChange(count + 1);
        }
    };

    const decreaseRoomCount = () => {
        if (count > 0) {
            onChange(count - 1);
        }
    };

    return (
        <div className="row mt-0">
            <div className="col-md-9 mr-auto">
                <h5 className="fw-normal">How many hours you are working ?</h5>
            </div>
            <div className="col-md-3 d-flex justify-content-end align-items-center">
                <button
                    type="button"
                    className="btn mt-0 btn-outline-dark rounded-circle m-1"
                    style={{ width: '37px' }}
                    onClick={decreaseRoomCount}>-</button>
                <h6 className="mt-2 mx-2" style={{ width: '20px' }} id="roomCount">
                    {count}
                </h6>
                <button
                    type="button"
                    className="btn mt-0 btn-outline-dark rounded-circle m-1"
                    style={{ width: '37px' }}
                    onClick={increaseRoomCount}>+</button>
            </div>
        </div>
    );
};

export default Counter;
