import { DownIcon, RoomIconOutline, UpIcon } from "@/assets/images";
import { Dropdown, InputField } from "@/src/components";
import { useState } from "react";

interface Props {
  roomNumber: number;
  propertyDetailData: PropertyDetailData;
  room: Room;
  setPropertyDetailData: (data: PropertyDetailData) => void;
}
enum RoomType {
  SelfContained = 'Self_Contained',
  Regular = 'Regular',
}
function RoomTypeCard(props: Props) {
  const { roomNumber, propertyDetailData, room, setPropertyDetailData } = props;
  const [expanded, setExpanded] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(room.type);

  const handleRoomSelect = (roomType: RoomType) => {
    setSelectedRoom(roomType);
    setPropertyDetailData({
      ...propertyDetailData,
      propertyInfo: {
        ...propertyDetailData.propertyInfo,
        rooms: propertyDetailData.propertyInfo.rooms.map((room, index) => {
          if (index === roomNumber) {
            return { ...room, type: roomType };
          }
          return room;
        }),
      },
    });
  };
  const handleChangeRoomSize = (value: any) => {
    setPropertyDetailData({
      ...propertyDetailData,
      propertyInfo: {
        ...propertyDetailData.propertyInfo,
        rooms: propertyDetailData.propertyInfo.rooms.map((room, index) => {
          if (index === roomNumber) {
            return { ...room, size: value };
          }
          return room;
        }),
      },
    })
  }
  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };

  const handleAction1 = () => {
    console.log("Action 1 performed!");
  };

  const handleAction2 = () => {
    console.log("Action 2 performed!");
  };

  const dropdownOptions = [
    { label: "sq/m", value: "sq/m", action: handleAction1 },
    { label: "ft/m", value: "ft/m", action: handleAction2 },
  ];

  return (
    <div
      key={roomNumber}
      className="room-details"
      style={{
        margin: '5px',
        padding: ' 4px 0.65rem 0px 15px',
        background: 'white',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '2%',
      }}
    >
      <div onClick={handleExpandToggle} className="d-flex justify-content-between align-items-center">
        <h6 className="fw-semibold m-0" style={{ marginTop: "2px !important" }}>{`Room ${roomNumber}`}</h6>
        {
          expanded ? <UpIcon /> : <DownIcon />
        }
      </div>

      {expanded && (
        <div>
          <h6 style={{ color: "#222222" }} className="mb-0 ">
            Room type
          </h6>
          <div className="my-2 d-flex flex-wrap gap-3">
            <div style={{ cursor: 'pointer' }} className={`roomTypeCard  text-center ${selectedRoom === RoomType.SelfContained ? 'whiteSmokeColor' : ''}`}
              onClick={() => handleRoomSelect(RoomType.SelfContained)}
            >
              <RoomIconOutline />
              <h6 style={{ paddingTop: 14 }}>Self Contained</h6>
            </div>
            <div style={{ cursor: 'pointer' }} className={`roomTypeCard  text-center  ${selectedRoom === RoomType.Regular ? 'whiteSmokeColor' : ''}`}
              onClick={() => handleRoomSelect(RoomType.Regular)}
            >
              <RoomIconOutline />
              <h6 style={{ paddingTop: 14 }}>Regular</h6>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center mx-1 mt-2">
            <InputField
              handleChange={handleChangeRoomSize}
              value={room.size === 0 ? '' : room.size}
              label="Room size"
              type="text"
              id="roomSize"
              placeholder="25x25"
            />
            <Dropdown label="sq/m" options={dropdownOptions} />
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomTypeCard;
