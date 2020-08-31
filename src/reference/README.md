# 简介

Spring Data Mybatis 实现了 Sprinig Data 技术标准，基于 MyBatis 通过预生成 Mapper 方式极大的简化了数据库操作。

Spring Data Mybatis 项目的目的为了简化数据库开发繁杂度，又不必引入类似 Hibernate 等复杂 ORM 框架实现快速开发的能力。该项目不仅限于 CRUD 的简化，而拥有更多如基于接口方法名实现查询、自动分页、自动审计等使用功能，让开发者在基于 Mybatis 开发时告别冗长的 XML 文件编写方式。

区别于 Hibernate 等框架，Spring Data Mybatis 并非在运行时进行 SQL 组装，而是“预编译”好所有的 SQL，理论上来讲跟原生 MyBatis 没有区别。

## 关于 Spring Data

Spring Data 是一个优秀的项目，其定义了一种操作数据的模式。

Spring Data Mybatis 即基于 Spring Data 标准。

> Spring Data’s mission is to provide a familiar and consistent, Spring-based programming model for data access while still retaining the special traits of the underlying data store.

> It makes it easy to use data access technologies, relational and non-relational databases, map-reduce frameworks, and cloud-based data services. This is an umbrella project which contains many subprojects that are specific to a given database. The projects are developed by working together with many of the companies and developers that are behind these exciting technologies.

### Features

- Powerful repository and custom object-mapping abstractions
- Dynamic query derivation from repository method names
- Implementation domain base classes providing basic properties
- Support for transparent auditing (created, last changed)
- Possibility to integrate custom repository code
- Easy Spring integration via JavaConfig and custom XML namespaces
- Advanced integration with Spring MVC controllers

> 可以通过 https://spring.io/projects/spring-data 了解更多。

## Spring Data Mybatis 特性

- **预编译** 运行时不做任何 SQL 生成，启动时完成所有 Mapper 准备

IDEA中智能提示：

<img :src="$withBase('/img/demo.gif')" alt="demo">

## 支持的数据库方言

MySQL, Oracle, Sql Server, PostgreSQL, H2, HSQLDB, EnterpriseDB, 达梦

## 代码仓库

- GitHub [https://github.com/easybest/spring-data-mybatis](https://github.com/easybest/spring-data-mybatis)
- Gitee [https://gitee.com/easybest/spring-data-mybatis](https://gitee.com/easybest/spring-data-mybatis)

### Issue 跟踪

[https://github.com/easybest/spring-data-mybatis/issues](https://github.com/easybest/spring-data-mybatis/issues)

## 案例

[点此登记](https://github.com/easybest/spring-data-mybatis/issues/221)
