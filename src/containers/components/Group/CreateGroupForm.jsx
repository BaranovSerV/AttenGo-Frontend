import { useState } from "react";
import { createGroup } from "../../../api/Group";

export default function CreateGroupForm() {
    const [groupName, setGroupName] = useState("");
    const [universityGroupId, setUniversityGroupId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Проверка на пустые поля
        if (!groupName || !universityGroupId) {
            setErrorMessage("Пожалуйста, заполните все поля.");
            return;
        }

        try {
            await createGroup(groupName, universityGroupId, accessToken);

            setSuccessMessage("Группа успешно создана!");
            setErrorMessage("");
            setGroupName("");
            setUniversityGroupId("");
        } catch (error) {
            setErrorMessage("Ошибка при создании группы. Попробуйте снова.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="groupName">Название группы</label>
                <input
                    type="text"
                    id="groupName"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />

                <label htmlFor="universityGroupId">ID группы университета</label>
                <input
                    type="number"
                    id="universityGroupId"
                    value={universityGroupId}
                    onChange={(e) => setUniversityGroupId(e.target.value)}
                />

                <button type="submit">Создать группу</button>
            </form>

            {/* Отображение ошибок и сообщений об успехе */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
}
