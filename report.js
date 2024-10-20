const submitReport = async (formData) => {
    const response = await fetch('/report', {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    if (result.success) {
        alert("Report submitted successfully");
    } else {
        console.error(result.message);
    }
};
