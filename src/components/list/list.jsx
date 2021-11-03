import { Component } from 'react' ;

class List extends Component {
  render(){
    const users = [
      {
        "email": "vero56@hotmail.com",
        "firstname": "Camille",
        "gender": "male",
        "last_login": {
          "date_time": "Sun Feb 15 04:46:30 UTC 2071",
          "ip4": "183.248.242.7"
        }
      },
      {
        "email": "say29@gmail.com",
        "firstname": "Kaya",
        "gender": "female",
        "last_login": {
          "date_time": "Wed Sep  7 09:26:43 UTC 2005",
          "ip4": "175.148.181.180"
        }
      },
      {
        "email": "lot33@outlook.com",
        "firstname": "Eriberto",
        "gender": "female",
        "last_login": {
          "date_time": "Fri Dec 11 08:26:38 UTC 2043",
          "ip4": "186.150.87.162"
        }
      },
      {
        "email": "colony64@yahoo.com",
        "firstname": "Cleo",
        "gender": "male",
        "last_login": {
          "date_time": "Sun Aug  6 08:39:40 UTC 2051",
          "ip4": "209.183.245.64"
        }
      },
      {
        "email": "slave@outlook.com",
        "firstname": "Alec",
        "gender": "female",
        "last_login": {
          "date_time": "Tue Sep 28 01:40:21 UTC 2060",
          "ip4": "154.184.223.22"
        }
      },
      {
        "email": "send18@gmail.com",
        "firstname": "Itzel",
        "gender": "male",
        "last_login": {
          "date_time": "Wed Mar 23 16:55:32 UTC 2101",
          "ip4": "192.168.144.207"
        }
      },
      {
        "email": "else_macey@hotmail.com",
        "firstname": "Aaron",
        "gender": "male",
        "last_login": {
          "date_time": "Fri Apr 19 18:18:22 UTC 2024",
          "ip4": "170.51.51.149"
        }
      },
      {
        "email": "aliquam_lura@yahoo.com",
        "firstname": "Sherwood",
        "gender": "female",
        "last_login": {
          "date_time": "Mon Mar 24 07:14:21 UTC 2014",
          "ip4": "192.163.185.174"
        }
      },
      {
        "email": "earth17@hotmail.com",
        "firstname": "Carrie",
        "gender": "male",
        "last_login": {
          "date_time": "Tue Dec 12 10:16:21 UTC 2090",
          "ip4": "141.39.247.220"
        }
      },
      {
        "email": "quia_franco@yahoo.com",
        "firstname": "Aubrey",
        "gender": "female",
        "last_login": {
          "date_time": "Thu May 23 10:55:17 UTC 2069",
          "ip4": "193.184.54.195"
        }
      }
    ]
      return <div>
        <ul>
          {users.map(user =>
            {const {email, firstname: name, last_login: login} = user;
          return (<li
            key = {email}
            >{name} {login}</li>)
            }
            )} 
        </ul>
      </div>;
  }
} 

export default List;