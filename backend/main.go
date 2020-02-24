package main

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	router := gin.Default()
	v1 := router.Group("/api")
	{
		v1.GET("/hello", doSayHello)
		v1.POST("/like", like)
	}
	router.Run()
}

type LikeJSON struct {
	User     string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
	Target   string `json:"target" binding:"required"`
	Count    int    `json:"count"`
}

func like(c *gin.Context) {
	decoder := json.NewDecoder(c.Request.Body)
	var res LikeJSON
	err := decoder.Decode(&res)
	if err != nil {
		c.JSON(http.StatusBadRequest, "invalid data, err: "+err.Error())
		return
	}

	var count = -1
	if res.Count >= 0 {
		count = res.Count
	}
	err = LikeUser(res.User, res.Password, res.Target, count)
	if err == nil {
		c.JSON(http.StatusOK, gin.H{"status": "success"})
	} else {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err})
	}
}

func doSayHello(c *gin.Context) {
	render(c, gin.H{"payload": SayHello()})
}

func render(c *gin.Context, data gin.H) {

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Credentials", "true")
	c.Header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
	c.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

	c.JSON(http.StatusOK, data["payload"])
}
