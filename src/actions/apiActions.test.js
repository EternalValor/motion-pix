const apiActions = require("./apiActions")
// @ponicode
describe("apiActions.fetchTrending", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchTrending(80)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            apiActions.fetchTrending(256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            apiActions.fetchTrending(1000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            apiActions.fetchTrending(5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            apiActions.fetchTrending(16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            apiActions.fetchTrending(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.fetchPopularTV", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchPopularTV()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.fetchPopularMovies", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchPopularMovies()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.fetchTvGenres", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchTvGenres()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.fetchMovieGenres", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchMovieGenres()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.fetchFeaturedLists", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchFeaturedLists("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            apiActions.fetchFeaturedLists("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            apiActions.fetchFeaturedLists("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            apiActions.fetchFeaturedLists(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            apiActions.fetchFeaturedLists(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            apiActions.fetchFeaturedLists(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.fetchScreenPlayDetails", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchScreenPlayDetails("bc23a9d531064583ace8f67dad60f6bb", "tv")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            apiActions.fetchScreenPlayDetails(12345, "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            apiActions.fetchScreenPlayDetails("bc23a9d531064583ace8f67dad60f6bb", "string")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            apiActions.fetchScreenPlayDetails(12345, "array")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            apiActions.fetchScreenPlayDetails(9876, "array")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            apiActions.fetchScreenPlayDetails(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.fetchMovieCast", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchMovieCast(9876, "tv")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            apiActions.fetchMovieCast(9876, "array")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            apiActions.fetchMovieCast("c466a48309794261b64a4f02cfcc3d64", "number")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            apiActions.fetchMovieCast("da7588892", "tv")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            apiActions.fetchMovieCast("c466a48309794261b64a4f02cfcc3d64", "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            apiActions.fetchMovieCast(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.fetchDiscover", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.fetchDiscover("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            apiActions.fetchDiscover("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            apiActions.fetchDiscover("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            apiActions.fetchDiscover("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            apiActions.fetchDiscover("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            apiActions.fetchDiscover(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("apiActions.resetScreenPlay", () => {
    test("0", () => {
        let callFunction = () => {
            apiActions.resetScreenPlay()
        }
    
        expect(callFunction).not.toThrow()
    })
})
