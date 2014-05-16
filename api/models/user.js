'use strict';
function User() {
  var user = {

      lastName: "",
      middleName: "",
      firstName: "",
      email: "",
      mobilePhone: "",
      homePhone: "",
      workPhone: "",
      objective: "",
      links: [],
      skills: [],
      education: [],
      employmentHistory: [],
      interests: [],
      publications: [],
      certifications: [],
      awards: [],
      references: [
        {
          name: "",
          phone: "",
          company: "",
          comment: ""
        }
      ]
    }
  return user;;
}

module.exports = User
