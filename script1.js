// Function to reset the form
const resetForm = function() {
    form.classList.remove('was-validated');
    form.reset();
  };
  
  // Function to get the data of the form
  const getData = function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const image = document.getElementById('image').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[name="skill"]:checked')).map(input => input.value);
    return { name, email, website, image, gender, skills };
  };
  
  // Function to display the enrolled students
  const displayEnrolledStudents = function() {
    const enrolledStudents = document.getElementById('enrolled-students');
    enrolledStudents.innerHTML = '';
  
    if (allUsersData.length === 0) {
      const message = document.createElement('p');
      message.textContent = 'Fill the form to enroll the students.';
      enrolledStudents.appendChild(message);
    } else {
      const heading = document.createElement('h2');
      heading.textContent = 'Enrolled Students';
      enrolledStudents.appendChild(heading);
  
      for (const userData of allUsersData) {
        const studentContainer = document.createElement('div');
        studentContainer.className = 'enrolled-student';
  
        const image = document.createElement('img');
        image.src = userData.image;
        image.alt = userData.name;
        image.className = 'enrolled-student__image';
        studentContainer.appendChild(image);
  
        const info = document.createElement('div');
        info.className = 'enrolled-student__info';
  
        const name = document.createElement('p');
        name.textContent = `Name: ${userData.name}`;
        info.appendChild(name);
  
        const email = document.createElement('p');
        email.textContent = `Email: ${userData.email}`;
        info.appendChild(email);
  
        const website = document.createElement('p');
        website.textContent = `Website: `;
        const websiteLink = document.createElement('a');
        websiteLink.href = userData.website;
        websiteLink.textContent = userData.website;
        website.appendChild(websiteLink);
        info.appendChild(website);
  
        const skills = document.createElement('p');
        skills.textContent = `Skills: ${userData.skills.join(', ')}`;
        info.appendChild(skills);
  
        studentContainer.appendChild(info);
        enrolledStudents.appendChild(studentContainer);
      }
    }
  };
  
  // Add event listener to the "Enroll student" button
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    if (form.checkValidity()) {
      const data = getData();
      allUsersData.push(data);
      displayEnrolledStudents();
      resetForm();
    } else {
      form.classList.add('was-validated');
    }
  });
  
  // Reset form on "Cancel" button click
  const cancelButton = document.querySelector('.btn-danger');
  cancelButton.addEventListener('click', function() {
    resetForm();
  });
  
  // Initialize the form
  resetForm();
  