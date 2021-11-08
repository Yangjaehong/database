# 데이터베이스 설계 11주차 실습 과제
## 12171802 양재홍

<span style="color:red">1. week3
<br>
<br>

>과제 설명

     이번 과제는 학생의 정보를 담는 database를 만들어 서버에서 select하여 출력하는 것 이다. 
     이에따라 학생의 정보를 담는 table을 만들어야 하였고 table에는 id, name, grade, major, date, mail이 들어가게 되었다.
<br>

- 작성한 테이블: <span style="color:yellow">**STUDENT**
<br>
<br>


>CREATE TABLE
- 다음과 같이 입력하였다.
- 제약조건은 key만 설정해주고 변수는 값에 맞게 설정하였다.

    ---
    - STUDENT

    <pre>
    <code>
    CREATE TABLE student (
    -> id int(8) NOT NULL,
    -> name char(30) NOT NULL,
    -> grade int(1) NOT NULL,
    -> major char(50) NOT NULL,
    -> date char(80) NOT NULL,
    -> mail char(50),
    -> PRIMARY KEY(id));
    </code>
    </pre>
    <br>

    ---
    
    >table 확인
    - 아래의 코드를 이용하여 완성된 테이블을 확인 하였다.
    <pre>
    <code>
    desc student;
    </code>
    </pre>
    <br>
---

- STUDENT talbe
    
    Field|Type|Null|Key|Default|Extra
    ---|---|---|---|---|---|
    id|int|NO|PRI|NULL||
    name|char(30)|NO||NULL||
    grade|int|NO||NULL||
    major|char(50)|NO||NULL||
    date|char(80)|NO||NULL||
    mail|char(50)|YES||NULL||

<br>
<br>

---
<span style="color:red">2. week8
<br>
<br>

>과제 설명

     이번 과제는 서버에서 company database를 조회하고 insert할 수 있도록 만드는 것 이다. 
     이에따라 직원과 부서의 정보를 담는 table을 만들어야 하였고 employee table과 department table을 작성하였다.
<br>

- 작성한 테이블: <span style="color:yellow">**EMPLOYEE, DEPARTMENT**
<br>
<br>


>CREATE TABLE
- 다음과 같이 입력하였다.
- 다음과 같이 key 제약 조건을 설정해주고 변수는 값에 맞게 설정하였다.
    
    
    -----
    - EMPLOYEE

    <pre>
    <code>
    CREATE TABLE EMPLOYEE( 
    -> Fname varchar(10) NOT NULL,
    -> Minit char NOT,
    -> Lname varchar(20) NOT NULL,
    -> Ssn char(9) NOT NULL,
    -> Bdate date,
    -> Adrdress varchar(30),
    -> Sex char(1),
    -> Salary decimal(5),
    -> Super_ssn char(9),
    -> Dno int,
    -> PRIMARY KEY(Ssn));
    </code>
    </pre>
    
    <br>

   ---
    - DEPARTMENT
   
   
    <pre>
    <code>
    CREATE TABLE DEPARTMENT( 
    -> Dname varchar(15) NOT NULL,
    -> Dnumber int NOT NULL,
    -> Mgr_ssn char(9) NOT NULL,
    -> Mgr_start_date date,
    -> PRIMARY KEY(Dnumber)
    -> UNIQUE (Dname),
    -> FOREIGN KEY (Mgr_ssn) REFERENCES EMPLOYEE(Ssn));
    </code>
    </pre>
    <br>
---
>table 확인
- 아래의 코드를 이용하여 완성된 테이블을 확인 하였다.


    <pre>
    <code>
    desc employee;
    desc department;
    </code>
     </pre>
    <br>
---

- EMPLOYEE talbe
    
    Field|Type|Null|Key|Default|Extra
    ---|---|---|---|---|---|
    Fname|varchar(10)|NO||NULL||
    Minit|char(1)|YES||NULL||
    Lname|varchar(20)|NO||NULL||
    Ssn|char(9)|NO|PRI|NULL||
    Bdate|date(80)|YES||NULL||
    Address|varchar(30)|YES||NULL||
    Sex|char(1)|YES||NULL||
    Salary|decimal(5,0)|YES||NULL||
    Super_ssn|char(9)|YES||NULL||
    Dno|int|NO||NULL||

<br>

---

- DEPARTMENT talbe
    
    Field|Type|Null|Key|Default|Extra
    ---|---|---|---|---|---|
    Dname|varchar(15)|NO|UNI|NULL||
    Dnumber|int|NO|PRI|NULL||
    Mgr_ssn|char(9)|NO|MUL|NULL||
    Mgr_start_date|date|YES||NULL||
<br>
<br>

<span style="color:red">2. week10
<br>
<br>

>과제 설명

     이번 과제는 서버에서 week10 database를 조회하고 delete 할 수 있도록 만드는 것 이다. 
     이에따라 학생과 과의 정보를 담는 table을 만들어야 하였고 student table과 department table을 작성하였다.
<br>

- 작성한 테이블: <span style="color:yellow">**STUDENT, DEPARTMENT**
<br>
<br>


>CREATE TABLE
- 다음과 같이 입력하였다.
- 변수는 값에 맞게 설정하였다.
    
    
    -----
    - STUDENT

    <pre>
    <code>
    CREATE TABLE STUDENT( 
    -> Studentid varchar(10),
    -> Studentname varchar(10),
    -> Dnum int);
    </code>
    </pre>
    
    <br>

   ---
    - DEPARTMENT 
   
   
    <pre>
    <code>
    CREATE TABLE DEPARTMENT( 
    -> Dname varchar(10),
    -> Dnumber int);
    </code>
    </pre>
    <br>
---
>table 확인
- 아래의 코드를 이용하여 완성된 테이블을 확인 하였다.


    <pre>
    <code>
    desc student;
    desc department;
    </code>
     </pre>
    <br>
---

- STUDENT talbe
    
    Field|Type|Null|Key|Default|Extra
    ---|---|---|---|---|---|
    Studentid|varchar(10)|||NULL||
    Studentname|varchar(10)|||NULL||
    Dnum|int|||NULL||

<br>

---

- DEPARTMENT talbe
    
    Field|Type|Null|Key|Default|Extra
    ---|---|---|---|---|---|
    Dname|varchar(10)|||NULL||
    Dnumber|int|||NULL||
<br>
<br>




    
