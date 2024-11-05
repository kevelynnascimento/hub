## Description

Hub API

## Support

Kevelyn Nascimento 
<a href="https://www.linkedin.com/in/kevelynnascimento" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>

### Running the application

```
$ dotnet run --project src/Api

$ dotnet watch --project src/GraphQL

$ dotnet run -- schema export --output schema.graphql
```


### Running tests

For the first execution, you need to install:
```
$ dotnet tool install -g dotnet-reportgenerator-globaltool
```

To execute unit tests:
```
$ dotnet test
```

To generate coverage test report on windows:
```
$ test_report.bat
```

### .NET Core common commands

```
$ dotnet new sln -n SolutionName

$ dotnet sln add Caminho/Para/Projeto.csproj

$ dotnet sln remove Caminho/Para/Projeto.csproj

$ dotnet new webapi -o ApiName

$ dotnet new classlib -o LibName

$ dotnet build

$ dotnet run --project src/ProjectName

$ dotnet new xunit -o TestProjectName

$ dotnet test

$ dotnet add package NomeDoPacote

$ dotnet remove package NomeDoPacote

$ dotnet list package

$ dotnet add reference ../ProjectToAdd/ProjectToAdd.csproj
```

### .NET Boilerplate

Hot chocolate - Used to build our GrapQL
.NET - v7 
C# v11
Debug using VS Code - Avoid the license
mongoDB
Repositories
Services
IoC
DevOps - Dennis



