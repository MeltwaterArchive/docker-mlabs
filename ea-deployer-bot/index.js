const express = require('express')
const app = express()
const exec = require('child_process').exec;
const shell = require('shelljs');

const GIT_REPO = process.env.GIT_REPO;
const GIT_USER = process.env.GIT_USER;
const GIT_EMAIL = process.env.GIT_EMAIL;
const LOCAL_FOLDER = './tmp';

app.all('/deploy', function (req, res) {
  const GIT_OAUTH_KEY = req.query.gitToken;

	if(GIT_OAUTH_KEY === undefined) {
		return res.send("Invalid git oauth token!");
	}

  shell.rm('-rf', LOCAL_FOLDER);
  shell.exec(`git config --global user.email "${GIT_EMAIL}"`);
  shell.exec(`git config --global user.name "${GIT_USER}"`);

  shell.exec(`git clone https://${GIT_OAUTH_KEY}@github.com/${GIT_REPO} tmp`, (code, output) => {
    console.log(code, output)
    if(code !== 0) {
      return;
    }
    shell.cd('tmp');
    if (shell.exec('yarn').code === 0) {
      console.log('Dependencies installed');
    }else {
      console.log('Error to install dependencies');
    }

    if (shell.exec('npm version patch').code === 0) {
		  shell.exec(`git push origin master && git push --tags /app/tmp`);
      console.log('Version updated');
    }else {
      console.log('Error to update version');
    }
  });
  res.send('Creating tag, will be deployed soon!');
});

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
