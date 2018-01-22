from __future__ import unicode_literals

from django.conf import settings
from django.views.generic import TemplateView
from web3 import HTTPProvider, Web3


class HomePage(TemplateView):
    template_name = "index.html"

    def __init__(self, *args, **kwargs):
        super(HomePage, self).__init__(*args, **kwargs)
        self.web3 = Web3(HTTPProvider(settings.NETWORK_URL))

    def get_context_data(self, **kwargs):
        context = super(HomePage, self).get_context_data(**kwargs)

        return context
