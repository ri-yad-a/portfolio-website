const particlesConfig = {
    // background: {
    //     color: {
    //         value: "#0d47a1",
    //     },
    // },
    fpsLimit: 60,
    interactivity: {
        events: {
            
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 1,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            connect: {
              distance: 2, 
              radius: 60,
            }, 
            bubble:  {
              size: 40,
              duration: 2,
              distance: 100,
              
            }
        },
    },
    particles: {
        color: {
            value: "#e7e4d2",
        },
        links: {
            color: "#50d8d7",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 20,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
}

export default particlesConfig;