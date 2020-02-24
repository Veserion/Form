package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)
func main() {
	router := gin.Default()
	v1 := router.Group("/api")
	{
		//v1.POST("/like", like)
		v1.GET("/hello", doSayHello)
	}
	//router.NoRoute(func(c *gin.Context) {
	//	render(c, gin.H{"payload": "not found"})
	//})
	router.Run()
}

func like(c *gin.Context) {
	SayHello()
}

func doSayHello(c *gin.Context)  {
	render(c, gin.H{"payload": SayHello()})
}

func render(c *gin.Context, data gin.H) {

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Credentials", "true")
	c.Header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
	c.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

	c.JSON(http.StatusOK, data["payload"])
}