<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full h-full"
>
  <CarouselContent className="h-full">
    {/* Event 1: Financial Reality Workshop - Split Layout */}
    <CarouselItem>
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/20 h-full flex flex-col lg:flex-row">
        {/* Image Section - Half width on desktop, full width on mobile */}
        <div className="lg:w-1/2 h-56 lg:h-auto relative overflow-hidden">
          <img
            src={financialEventImage}
            alt="4 Days to a New Financial Reality Workshop"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gif-orange/20 to-transparent"></div>

          {/* Live badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-gif-orange rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Upcoming
              </span>
            </div>
          </div>

          {/* Event type tag */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-sm font-semibold text-gif-orange">
                Workshop
              </span>
            </div>
          </div>
        </div>

        {/* Content Section - Half width on desktop, full width on mobile */}
        <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-gif-orange rounded-full"></div>
              <span className="text-sm font-medium text-gif-orange">
                Featured Event
              </span>
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4 leading-tight">
              4 Days to a New Financial Reality
            </h3>

            <p className="text-lg md:text-xl font-medium text-gif-orange mb-3">
              Business and Wealth Reset Workshop
            </p>

            {/* Event details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-gif-orange/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-gif-orange" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-gray-900">Nigeria</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gif-orange/10 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-gif-orange" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-medium text-gray-900">4-Day Intensive</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Transform your mindset around business and wealth creation. Join
              our intensive workshop for practical strategies to reset your
              financial reality and build sustainable prosperity.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              asChild
              className="w-full bg-gif-orange hover:bg-gif-orange/90 text-white h-12 text-base group"
            >
              <Link to="/contact">
                Register Now
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <div className="text-center">
              <Link
                to="/events"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gif-orange transition-colors"
              >
                View all events
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="left-2 md:left-4 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white backdrop-blur-sm border-white/30" />
  <CarouselNext className="right-2 md:right-4 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white backdrop-blur-sm border-white/30" />
</Carousel>;
