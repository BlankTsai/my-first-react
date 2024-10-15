import React from "react";

const ExportCSV = ({ todos }) => {

    const exportToCSV = () => {
        const csvRows = [];
        const headers = ['Content', 'Is Completed']; // 欄位名稱
        csvRows.push(headers.join(',')); // 將標題加入

        todos.forEach(todo => {
            // 如果 isCompleted 沒有被設置，預設為 false
            const isCompleted = todo.isCompleted !== undefined ? todo.isCompleted : false;
            
            const row = [todo.content, isCompleted ? 'Completed' : 'Not Completed'];
            csvRows.push(row.join(',')); // 加入每行數據
        });

        const csvContent = csvRows.join('\n'); // 組合成 CSV 內容

        // 創建 CSV Blob 並生成下載連結
        const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'todos.csv');
        a.click(); // 自動觸發下載
    }

    return (
        <button
            onClick={exportToCSV}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '5px',
                padding: '10px 20px',
                border: 'none',
                margin: '10px',
                cursor: 'pointer'
            }}
        >
            匯出 CSV
        </button>
    );

};

export default ExportCSV;
