# MPCC-System

# First Time running the project
    docker-compose -f docker-compose.dev.yml up --build

# To Start the project (without rebuilding the images and any changes in the code)
    docker-compose -f docker-compose.dev.yml up

 # To Stop the project
    docker-compose -f docker-compose.dev.yml down

 # To Stop the project and remove all the containers and volumes
    docker-compose -f docker-compose.dev.yml down --volumes










# Ignore the following commands (Just for reference)
docker-compose -f docker-compose.dev.yml up --build

docker-compose -f docker-compose.dev.yml build --no-cache backend

docker system prune -a --volumes

docker-compose -f docker-compose.dev.yml up //di kailangan ng --build kapag nag --no chance dahil fresh

docker-compose -f docker-compose.dev.yml down --volumes

docker-compose -f docker-compose.dev.yml up
