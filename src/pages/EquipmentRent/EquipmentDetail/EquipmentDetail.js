import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EquipmentDetail = () => {
    const { id } = useParams();
    const [equipment, setEquipment] = useState({});

    return (
        <div>
            <h2>Param ID: {id}</h2>
        </div>
    );
};

export default EquipmentDetail;
