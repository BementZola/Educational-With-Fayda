# Educational-With-Fayda
## Contributors
  **Bemnet Abebaw**
## Project Synopsis:
### Problem Statement
The current educational administrative processes often suffer from fragmentation, manual data handling, and a lack of centralized access for various stakeholders (students, teachers, and administrators). This leads to inefficiencies in grade management, communication, grievance resolution, and student admissions. Specifically:

 - Decentralized Information: Students struggle to access their grades and announcements easily.
 - Inefficient Grade Management: Teachers face cumbersome processes for submitting and managing grades.
 - Lack of Formal Grievance Channel: Students may not have a clear, accessible, and trackable way to submit grievances.
 - Manual Admission Processes: Student admission information might be scattered, making search and management difficult for administrators.
 - Disjointed Communication: Important announcements might not reach all relevant parties effectively.

### Proposed Solution
This project aims to develop a comprehensive web-based educational management portal to centralize and streamline these administrative and academic functions. The solution will include:

 - Role-Based Access: Secure login portals for administrators, teachers, and students, ensuring each user group has access only to relevant functionalities.
 - Centralized Announcement System: A dedicated section for posting and viewing announcements, ensuring timely and broad communication.
 - Streamlined Grade Management: Interfaces for teachers to submit grades and for administrators to receive, manage, and post them. Students will have a dedicated view to access their grades.
 - Digital Grievance System: An online form for students to submit grievances, with potential for tracking and administrative response (though the current implementation focuses on submission).
 - Student Admission Search & Management: A tool for administrators to search and view student admission details using unique identifiers.
 - File Attachment Capabilities: Functionality to attach and send files, particularly for external systems like EAES (Educational Assessment and Examination Services).

### Expected Outcome
We hope to achieve the following outcomes with this project:
 
 - Improved Efficiency: Significantly reduce manual workload and administrative overhead for school staff.
 - Enhanced Accessibility: Provide students and teachers with easy, 24/7 access to critical information and services.
 - Better Communication: Ensure that important announcements and information are disseminated effectively and reach the intended audience.
 - Increased Transparency: Offer a clear and auditable process for grade management and grievance resolution.
 - Data Centralization: Create a single source of truth for student, teacher, and administrative data, improving data integrity and reporting.
 - Modernized Operations: Transition traditional, often paper-based, processes to a more efficient and modern digital platform.
   
### Fayda’s Role
Fayda, as a national digital identification system, could play a pivotal role in enhancing the security and integrity of this educational portal.

 - Secure User Authentication: Fayda's unique FIN (Fayda Identification Number) could be integrated as the primary authentication method for all user roles (Admin, Teacher, Student). This would leverage Fayda's biometric and eKYC capabilities to provide a highly secure and verifiable login process, eliminating the need for traditional username/password systems that are prone to breaches.
 - Identity Verification for Admissions: For student admissions, Fayda's system could be used to instantly verify the identity and demographic information of prospective students, reducing fraud and errors in the enrollment process.
 - Secure Document Exchange: When attaching documents to EAES (Educational Assessment and Examinations Service) or handling grade submissions, Fayda's secure digital signing or identity verification could ensure the authenticity and integrity of the documents and the sender.
 - Personalized Data Access: By linking user accounts to their Fayda FIN, the system could ensure that only the rightful individual can access their sensitive academic records (grades, grievances, admission status), enhancing data privacy and compliance.

## Tech Stack
The following technologies and frameworks are planned/used in the development of this project:

Frontend:
 - HTML5: For structuring the web content.
 - CSS3: For styling and layout, including responsive design.
 - JavaScript (Vanilla JS): For interactive elements, form handling, and client-side logic.
 - Tailwind CSS: A utility-first CSS framework for rapid UI development and responsive styling (used in gradesubmission.html, recevieandpost.html, studentaddmision.html).
 - Font Awesome: For scalable vector icons, enhancing the visual appeal and user experience.
 - Google Fonts (Inter): For consistent and modern typography across the website.

Backend/Data Storage:
 - Local Storage: Currently used for basic grievance data persistence in sgrievance.html.
