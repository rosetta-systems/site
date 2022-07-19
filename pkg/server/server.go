package server

import (
	"net/http"
	"github.com/rosetta-systems/site/pkg/middleware"
	"github.com/rosetta-systems/site/pkg/router"
)

type Server struct {
	Mux		http.Handler
	middleware.Middleware
	router.Router
}
