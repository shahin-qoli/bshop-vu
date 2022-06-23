<template>
  <!-- <div>
    <p><strong>{{ address.firstName }} {{ address.lastName }}</strong></p>
    <p v-if="address.company">{{ address.company }}</p>
    <p>{{ address.addressLine1 }}</p>
    <p v-if="address.addressLine2">{{ address.addressLine2 }}</p>
    <p>{{ city }}</p>
    <p>{{ address.countryName }}</p>
    <p>{{ address.phone }}</p>
  </div> -->
        <div class="profile-address-content">
            <ul class="profile-address-info">
                <li>
                    <div class="profile-address-info-item location">
                        <i class="mdi mdi-map-outline"></i>
                        {{ address.countryName }}
                        <p  v-if="address.company">{{ address.company }}</p>
                        <p style="font: iranyekan;">{{ address.addressLine1 }}</p>
                        <p v-if="address.addressLine2">{{ address.addressLine2 }}</p>
                    </div>
                </li>
                <li>
                    <div class="profile-address-info-item location">
                        <i class="mdi mdi-email-outline"></i>
                        {{ address.postalCode }}
                    </div>
                </li>
                <li>
                    <div class="profile-address-info-item location">
                        <i class="mdi mdi-phone"></i>
                        {{ address.phone }}
                    </div>
                </li>
                <li>
                    <div class="profile-address-info-item location">
                        <i class="mdi mdi-account"></i>
                        {{ address.firstName }} {{ address.lastName }}
                    </div>
                </li>
                <!-- <li class="location-link">
                    <a href="#" class="edit-address-link"
                        onclick="document.getElementById('modal').style.display='block'">ویرایش
                        نشانی</a>
                </li> -->
            </ul>
        </div>
</template>

<script>
export default {
  name: 'UserSavedAddress',

  props: {
    address: {
      default: {},
      type: Object
    }
  },

  computed: {
    city() {
      if (this.address.state) {
        return `${this.address.postalCode} ${this.address.city}, ${this.address.state}`;
      }

      return `${this.address.postalCode} ${this.address.city}`;
    }
  }
};
</script>
