import React, { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  const generateHTML = () => {
    const html = `
<table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif;">
  <tr>
    <td style="padding-right: 20px; border-right: 2px solid #f9b233; text-align: center;">
      <img src="https://www.gracechristianschools.us/wp-content/uploads/2022/03/cropped-logo-199x199.png" alt="Grace Logo" style="width: 120px; margin-bottom: 10px;"><br>
    </td>
    <td style="padding-left: 20px;">
      <p style="margin: 0; font-size: 16px; font-weight: bold; color: #00468b;">${fullName}</p>
      <p style="margin: 0; font-size: 13px; color: #444;">${title}</p>
      <p style="margin: 8px 0 0 0; font-size: 13px; color: #444;">
        • Grace Christian School<br>
        • Afterschool • Summer Camp • Private Education<br>
        • 10760 Thornmint Rd • San Diego • CA 92127
      </p>
      <p style="margin: 8px 0 0 0; font-size: 13px;">
        <strong style="color: #4287f5;">Phone:</strong> ${phone}<br>
        <strong style="color: #4287f5;">Email:</strong> <a href="mailto:${email}" style="color: #00468b;">${email}</a><br>
        <strong style="color: #4287f5;">Web:</strong> 
        <a href="https://www.gracechristianschools.us/" style="color: #00468b;">https://www.gracechristianschools.us/</a>
      </p>
    </td>
  </tr>
</table>`;
    setHtmlContent(html);
  };

  const downloadFile = () => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${fullName.replace(' ', '_')}_signature.html`;
    a.click();
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#00468b', textAlign: 'center' }}>Grace All-Star Email Signature Generator</h1>

      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <label>Full Name:</label><br/>
        <input placeholder="e.g., Jeff Yuan" value={fullName} onChange={e => setFullName(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} /><br/>
        
        <label>Title:</label><br/>
        <input placeholder="e.g., Program Coordinator" value={title} onChange={e => setTitle(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} /><br/>
        
        <label>Phone Number:</label><br/>
        <input placeholder="e.g., (858) 649-9760" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} /><br/>
        
        <label>Email Address:</label><br/>
        <input placeholder="e.g., name@GraceAllStarAcademy.com" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} /><br/>

        <div style={{ textAlign: 'center' }}>
          <button onClick={generateHTML} style={{ padding: '10px 20px', marginRight: '10px', backgroundColor: '#00468b', color: 'white', border: 'none', borderRadius: '5px' }}>Preview</button>
          <button onClick={downloadFile} style={{ padding: '10px 20px', backgroundColor: '#f9b233', color: '#000', border: 'none', borderRadius: '5px' }}>Download HTML</button>
        </div>
      </div>

      {htmlContent && (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: '#00468b' }}>Signature Preview:</h3>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      )}

      <footer style={{ marginTop: '40px', fontSize: '12px', textAlign: 'center', color: '#888' }}>
        © 2025 Grace All-Star Academy • Signature Generator Tool for Staff Use Only
      </footer>
    </div>
  );
}

export default App;