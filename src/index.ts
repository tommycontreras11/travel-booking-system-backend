import app from "./app"

async function main() {
    app.listen(process.env.PORT || 3000)
    console.log(`Server running on port ${process.env.PORT || 3000} 🚀`)
}

main()