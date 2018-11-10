# SoX Docker Wrapper

For consistency, all entries will be evaluated with the [SoX utility](http://sox.sourceforge.net/). This can be installed locally on most systems, *or* if you prefer not to install it locally, you can use this Docker image.

This image accepts all the same command line arguments as the native utility, so it can be used with pipes, e.g.

    in.raw > docker run --rm -i sox -t raw -t raw -r 44100 -b 16 -c 2 -e un - -t ogg - > out.ogg

Or you can use the `/data` volume, e.g.

    docker run --rm -v "$(pwd):/data" -i sox -t raw -t raw -r 44100 -b 16 -c 2 -e un in.raw -t ogg out.ogg

You can build this image by yourself by running:

    # Linux
    docker build -t sox ./util/sox

    # Windows
    docker build -t sox .\util\sox

Or you can simply download it from Docker Hub.

    docker pull pswg/sox
    docker tag pswg/sox sox
