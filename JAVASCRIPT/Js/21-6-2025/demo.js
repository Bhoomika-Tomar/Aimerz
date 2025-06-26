const options=["abc","def","ghi"];

const htmlString=options.map(opt=>`
    <div class="option">
            <label><input type="radio" name="option" value=${opt}/>${opt}</label>
    </div>
    
    `).join("")
    console.log(htmlString);
    