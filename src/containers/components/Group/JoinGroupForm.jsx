import { useState } from "react";

export default function JoinGroupForm() {
    const [groupToken, setGroupToken] = useState('');

    const handleGroupTokenChange = (e) => {
        setGroupToken(e.target.value);
    };

    const handleJoinGroupSubmit = (e) => {
        e.preventDefault();
        console.log("Вступить в группу с токеном:", groupToken);
        // Здесь можно отправить запрос на вступление в группу
    };

    return (
        <div className="form-container">
            <h2>Вступить в группу</h2>
            <form onSubmit={handleJoinGroupSubmit}>
                <label>
                    Secret-token группы:
                    <input
                        type="text"
                        value={groupToken}
                        onChange={handleGroupTokenChange}
                        required
                    />
                </label>
                <button type="submit">Вступить в группу</button>
            </form>
        </div>
    );
}
